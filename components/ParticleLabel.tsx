"use client";

import { useEffect, useRef } from "react";

export default function ParticleLabel({ children }: { children: string }) {
  const textRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const text = textRef.current;
    const canvas = canvasRef.current;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    if (!text || !canvas || preference.matches) return;
    const context = canvas.getContext("2d");
    const mask = document.createElement("canvas");
    const ink = mask.getContext("2d", { willReadFrequently: true });
    if (!context || !ink) return;

    const style = getComputedStyle(text);
    const rect = text.getBoundingClientRect();
    mask.width = Math.ceil(rect.width);
    mask.height = Math.ceil(rect.height);
    if (!mask.width || !mask.height) return;
    ink.font = style.fontWeight + " " + style.fontSize + " " + style.fontFamily;
    ink.letterSpacing = style.letterSpacing;
    ink.fillStyle = "#fff";
    const metrics = ink.measureText(children);
    const baseline = (mask.height - metrics.actualBoundingBoxAscent - metrics.actualBoundingBoxDescent) / 2 + metrics.actualBoundingBoxAscent;
    ink.fillText(children, 0, baseline);

    const pixels = ink.getImageData(0, 0, mask.width, mask.height).data;
    const points: { x: number; y: number; dx: number; dy: number }[] = [];
    for (let y = 0; y < mask.height; y += 3) {
      for (let x = 0; x < mask.width; x += 3) {
        if (pixels[(y * mask.width + x) * 4 + 3] < 100) continue;
        const seed = points.length * 2.39996;
        points.push({ x: x + 24, y: y + 18, dx: Math.cos(seed) * (14 + x % 13), dy: Math.sin(seed) * (10 + y % 9) });
      }
    }
    if (!points.length) return;

    const width = mask.width + 48, height = mask.height + 36;
    const scale = Math.min(devicePixelRatio || 1, 2);
    canvas.width = width * scale;
    canvas.height = height * scale;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    context.scale(scale, scale);
    context.fillStyle = style.color;
    text.style.opacity = "0";
    let frame = 0;
    let start: number | undefined;
    const finish = () => {
      cancelAnimationFrame(frame);
      context.clearRect(0, 0, width, height);
      text.style.opacity = "1";
      canvas.style.opacity = "0";
    };
    const draw = (time: number) => {
      start ??= time;
      const elapsed = time - start;
      const progress = Math.min(elapsed / 420, 1);
      const remaining = Math.pow(1 - progress, 3);
      const fade = Math.max(0, Math.min((elapsed - 420) / 100, 1));
      context.clearRect(0, 0, width, height);
      context.globalAlpha = .9;
      for (const point of points) {
        context.beginPath();
        context.arc(point.x + point.dx * remaining, point.y + point.dy * remaining, 1, 0, Math.PI * 2);
        context.fill();
      }
      canvas.style.opacity = String(1 - fade);
      text.style.opacity = String(fade);
      if (elapsed < 520) frame = requestAnimationFrame(draw);
      else finish();
    };
    const onPreferenceChange = () => { if (preference.matches) finish(); };
    preference.addEventListener("change", onPreferenceChange);
    frame = requestAnimationFrame(draw);
    return () => { finish(); preference.removeEventListener("change", onPreferenceChange); };
  }, [children]);

  return <span className="particle-label"><span ref={textRef}>{children}</span><canvas ref={canvasRef} aria-hidden="true" /></span>;
}
