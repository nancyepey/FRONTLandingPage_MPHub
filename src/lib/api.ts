export const API = (process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000/api').replace(/\/$/, '');
export type LandingConfig = { template:string; brand_name:string; headline:string; subheadline:string; mission:string; primary_color:string; secondary_color:string; accent_color:string; google_play_url:string; app_store_url:string; universal_download_url:string; support_email:string };
export async function getConfig(): Promise<LandingConfig> {
  const fallback: LandingConfig = {template:'coming_soon',brand_name:'MissingPeopleHub',headline:'Together, we can bring missing people home.',subheadline:'A community-powered platform to share information and help reconnect families.',mission:'Every share can make a difference. Join a community working to bring people home.',primary_color:'#2F6F73',secondary_color:'#4FA3A5',accent_color:'#6EC1B3',google_play_url:'',app_store_url:'',universal_download_url:'https://example.org/download',support_email:''};
  try { const r = await fetch(`${API}/public/config/`, {cache:'no-store'}); if(!r.ok) return fallback; return {...fallback,...await r.json()}; } catch { return fallback; }
}
