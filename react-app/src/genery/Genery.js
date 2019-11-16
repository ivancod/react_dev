import React from 'react';
import Template from './Template.js';
import 'qrjs2';

class Genery extends React.Component{

    generySVG(){
        const svg = window.QRCode.generateSVG(this.props.string, {
                ecclevel: this.props.layer,
                fillcolor: "#F2F2F2",
                textcolor: "#D13438",
                modulesize: 8
            }),
            rect = svg.querySelectorAll('rect');
        let arrayData = []; // массив с координатами точек
        for (let i = 1; i < (rect.length - 1); i++) {
            let x, y, point = [];
            x = (rect[i].attributes.x.value - 32);
            y = rect[i].attributes.y.value - 32;
            point.push(x);
            point.push(y);
            arrayData.push(point); 
        }
        let pointSize = rect[1].attributes.width.value;
        let xN;
        let data = [];
     
        for (var i = 0; i < arrayData.length; i++) { // координаты последней точки в строке
            if (arrayData[0][1] === arrayData[i][1]) xN = arrayData[i][0];
            let point = [];
            let x = arrayData[i][0] / pointSize; 
            let y = arrayData[i][1] / pointSize; 
            point.push(x);
            point.push(y);
            data.push(point);
        }
        const sizeSvg = Number(pointSize) + xN
        const count = sizeSvg / pointSize; 
        let pointSizeNew = (100 / count)+''; // размер точки в %
        let pointSizeOnProcents = pointSizeNew.replace('.', '');
        return { 
            points: arrayData, 
            size: pointSize,
            sizeSvg: sizeSvg, 
            sizePointProcent: pointSizeOnProcents,
            count: count, // кол-во точек в ряд
            color: this.props.color,
            logo: this.props.logo,
            svg: this.props.svg
        };
    }

    render(){
        return ( <Template { ... this.generySVG() }/> );
    }
}

export default Genery;
