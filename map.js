var map = L.map('map').setView([51.505, -0.09], 13); // 设置地图初始位置和缩放等级

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map); // 添加底图

// 加载 GeoJSON 数据并添加到地图
fetch('newgeo.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data).addTo(map);
    });
