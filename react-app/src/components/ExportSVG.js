import React from 'react';

class ExportSVG extends React.Component{
    exportSVG() {
        if(this.props.svg){
            var doc = new DOMParser().parseFromString(this.props.svg, "text/xml").querySelector('svg');
            var svgDocType = document.implementation.createDocumentType('svg', "-//W3C//DTD SVG 1.1//EN", "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd");
            var svgDoc = document.implementation.createDocument('http://www.w3.org/2000/svg', 'svg', svgDocType);
            svgDoc.replaceChild(doc, svgDoc.documentElement);
            var svgData = (new XMLSerializer()).serializeToString(svgDoc);
            return "data:image/svg+xml; charset=utf8," + encodeURIComponent(svgData.replace(/></g, '>\n\r<'));
        }
    }
    render(){
         return(
            <div>
                <br />
                <a className="saveSVG" href={ this.exportSVG() } download={ this.props.name+'.svg' } > Скачать как SVG </a> 
            </div> 
        );
    }
}

export default ExportSVG;