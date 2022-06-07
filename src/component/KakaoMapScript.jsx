const { kakao } = window;

export default function KakaoMapScript() {
    const container = document.getElementById('myMap');
    const options = {
        center: new kakao.maps.LatLng(37.49632346686845, 127.02934323385911),
        level: 3
    };
    const map = new kakao.maps.Map(container, options);

}