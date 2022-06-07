import React,{useEffect} from 'react'


function Running() {

  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `         
        function initTmap() {
            var map = new Tmapv2.Map("TMapApp", {
                center: new Tmapv2.LatLng(37.494240999999995,127.02750059999998),
                zoom:15,
                zoomControl: false
            });
        }
        
        initTmap();
   `;
    script.type = "text/javascript";
    script.async = "async";
    document.head.appendChild(script);
  }, []);

  return (
    <div>
    <div
    id="TMapApp"
    style={{
      height: "100%",
      width: "100%",
      position: "absolute",
    }}
    />
  </div>
  )

}

export default Running;
