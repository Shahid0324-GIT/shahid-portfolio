import { ImageResponse } from "next/og";
export const alt = "Mohammed Jameel Shahid — Code & Craft";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{display:"flex", flexDirection:"column", width:"100%", height:"100%", background:"#f6f3ed", color:"#24251f", padding:"65px 80px", justifyContent:"space-between"}}>
      <div style={{display:"flex", justifyContent:"space-between", fontSize:24}}><span>shahid.</span><span style={{color:"#6b6b61", fontSize:18}}>FULLSTACK ENGINEER / INDIA</span></div>
      <div style={{display:"flex", fontSize:140, letterSpacing:-8, fontWeight:700}}>CODE <span style={{color:"#b5442a", margin:"0 25px"}}>&</span> CRAFT</div>
      <div style={{display:"flex", justifyContent:"space-between", fontSize:23}}><span>Thoughtful interfaces. Reliable systems.</span><span>Mohammed Jameel Shahid</span></div>
    </div>, size
  );
}
