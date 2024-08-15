var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_nazwalagi_1 = new ol.format.GeoJSON();
var features_nazwalagi_1 = format_nazwalagi_1.readFeatures(json_nazwalagi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nazwalagi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nazwalagi_1.addFeatures(features_nazwalagi_1);
var lyr_nazwalagi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nazwalagi_1, 
                style: style_nazwalagi_1,
                popuplayertitle: "nazwa lagi",
                interactive: true,
                title: '<img src="styles/legend/nazwalagi_1.png" /> nazwa lagi'
            });
var format_situsaeur1_2 = new ol.format.GeoJSON();
var features_situsaeur1_2 = format_situsaeur1_2.readFeatures(json_situsaeur1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_situsaeur1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_situsaeur1_2.addFeatures(features_situsaeur1_2);
var lyr_situsaeur1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_situsaeur1_2, 
                style: style_situsaeur1_2,
                popuplayertitle: "situsaeur 1",
                interactive: true,
                title: '<img src="styles/legend/situsaeur1_2.png" /> situsaeur 1'
            });
var format_Buffered_3 = new ol.format.GeoJSON();
var features_Buffered_3 = format_Buffered_3.readFeatures(json_Buffered_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_3.addFeatures(features_Buffered_3);
var lyr_Buffered_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_3, 
                style: style_Buffered_3,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_3.png" /> Buffered'
            });
var format_Waypoints_4 = new ol.format.GeoJSON();
var features_Waypoints_4 = format_Waypoints_4.readFeatures(json_Waypoints_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waypoints_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waypoints_4.addFeatures(features_Waypoints_4);
var lyr_Waypoints_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waypoints_4, 
                style: style_Waypoints_4,
                popuplayertitle: "Waypoints",
                interactive: true,
                title: '<img src="styles/legend/Waypoints_4.png" /> Waypoints'
            });
var format_UTMNzwnzw_5 = new ol.format.GeoJSON();
var features_UTMNzwnzw_5 = format_UTMNzwnzw_5.readFeatures(json_UTMNzwnzw_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTMNzwnzw_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTMNzwnzw_5.addFeatures(features_UTMNzwnzw_5);
var lyr_UTMNzwnzw_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTMNzwnzw_5, 
                style: style_UTMNzwnzw_5,
                popuplayertitle: "UTM Nzw — nzw",
                interactive: true,
                title: 'UTM Nzw — nzw'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_nazwalagi_1.setVisible(true);lyr_situsaeur1_2.setVisible(true);lyr_Buffered_3.setVisible(true);lyr_Waypoints_4.setVisible(true);lyr_UTMNzwnzw_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_nazwalagi_1,lyr_situsaeur1_2,lyr_Buffered_3,lyr_Waypoints_4,lyr_UTMNzwnzw_5];
lyr_nazwalagi_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_situsaeur1_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Buffered_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Waypoints_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_UTMNzwnzw_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descriptio': 'descriptio', 'altitudeMo': 'altitudeMo', });
lyr_nazwalagi_1.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_situsaeur1_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Buffered_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Waypoints_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_UTMNzwnzw_5.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'descriptio': '', 'altitudeMo': '', });
lyr_nazwalagi_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_situsaeur1_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Buffered_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Waypoints_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_UTMNzwnzw_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descriptio': 'no label', 'altitudeMo': 'no label', });
lyr_UTMNzwnzw_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});