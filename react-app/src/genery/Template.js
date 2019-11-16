import React from 'react';


class Template extends React.Component{
    TMP(name ,x, y, size, size_0, bg){
        let TempSVG = {
            startSVG: `<svg version="1.1"  xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 1000 1000" xml:space="preserve">`,
            endSVG:   `</svg>`, 
        
            p_boxSVG:   `<g xmlns="http://www.w3.org/2000/svg" transform="translate(${x*10},${y*10}) scale(0.${size}, 0.${size})">
                            <g transform="" style="fill:${bg}">
                                <rect width="100" height="100"/>
                            </g>
                        </g>`,
            p_big_boxSVG1:  `<g xmlns="http://www.w3.org/2000/svg" transform="translate(${x*10},${y*10}) scale(${size_0*7})">
                                <g transform=" translate(100, 0) scale(-1,1) " style="fill:${bg}">
                                    <g>
                                        <path style="fill:none" d="M85,66.221V33.75C85,23.411,76.414,15,65.859,15H34.14C23.586,15,15,23.411,15,33.75v51.246   l50.855-0.016C76.414,84.98,85,76.564,85,66.221z"/>
                                        <path d="M100,66.221V33.75C100,15.141,84.68,0,65.859,0H34.14C15.32,0,0,15.141,0,33.75V100l65.859-0.02   C84.68,99.98,100,84.84,100,66.221z M85,66.221c0,10.344-8.586,18.76-19.145,18.76L15,84.996V33.75C15,23.411,23.586,15,34.14,15   h31.719C76.414,15,85,23.411,85,33.75V66.221z"/>
                                    </g>
                                </g>
                            </g>`,
            p_big_boxSVG2:  `<g xmlns="http://www.w3.org/2000/svg" transform="translate(${x*10},${y*10}) scale(${size_0*7})">
                                <g transform="" style="fill:${bg}">
                                    <g>
                                        <path style="fill:none" d="M85,66.221V33.75C85,23.411,76.414,15,65.859,15H34.14C23.586,15,15,23.411,15,33.75v51.246   l50.855-0.016C76.414,84.98,85,76.564,85,66.221z"/>
                                        <path d="M100,66.221V33.75C100,15.141,84.68,0,65.859,0H34.14C15.32,0,0,15.141,0,33.75V100l65.859-0.02   C84.68,99.98,100,84.84,100,66.221z M85,66.221c0,10.344-8.586,18.76-19.145,18.76L15,84.996V33.75C15,23.411,23.586,15,34.14,15   h31.719C76.414,15,85,23.411,85,33.75V66.221z"/>
                                    </g>
                                </g>
                            </g>`,
            p_big_boxSVG3:  `<g xmlns="http://www.w3.org/2000/svg" transform="translate(${x*10},${y*10}) scale(${size_0*7})">
                                <g transform=" translate(100, 0) scale(-1,1)  translate(0,100) scale(1,-1) " style="fill:${bg}">
                                    <g>
                                        <path style="fill:none" d="M85,66.221V33.75C85,23.411,76.414,15,65.859,15H34.14C23.586,15,15,23.411,15,33.75v51.246   l50.855-0.016C76.414,84.98,85,76.564,85,66.221z"/>
                                        <path d="M100,66.221V33.75C100,15.141,84.68,0,65.859,0H34.14C15.32,0,0,15.141,0,33.75V100l65.859-0.02   C84.68,99.98,100,84.84,100,66.221z M85,66.221c0,10.344-8.586,18.76-19.145,18.76L15,84.996V33.75C15,23.411,23.586,15,34.14,15   h31.719C76.414,15,85,23.411,85,33.75V66.221z"/>
                                    </g>
                                </g>
                            </g>`,
        
            p_circleSVG:    `<g xmlns="http://www.w3.org/2000/svg" transform="translate(${x*10}, ${y*10}) scale(0.0${size*2})">
                                <g transform="" style="fill:${bg}">
                                    <path d="M250,0c138.077,0,250,111.93,250,250c0,138.077-111.923,250-250,250C111.93,500,0,388.077,0,250C0,111.93,111.93,0,250,0z"/>
                                </g>
                            </g>`,
        
            p_big_circleSVG:`<g xmlns="http://www.w3.org/2000/svg" transform="translate(${(x*10)}, ${(y*10)}) scale(0.0${size*1.5})">
                                <g transform="" style="fill:${bg}">
                                    <circle cx="-333" cy="-333" r="1000"/>
                                </g>
                            </g>`,
        
            p_tlSVG:    `<g xmlns="http://www.w3.org/2000/svg" transform="translate(${x*10}, ${y*10}) scale(0.0${size*2})">
                            <g transform="" style="fill:${bg}">
                                <g>
                                    <path d="M0,500h500V0C223.861,0.001,0,223.854,0,500z"/>
                                </g>
                            </g>
                        </g>`,
            p_trSVG:    `<g xmlns="http://www.w3.org/2000/svg" transform="translate(${x*10}, ${y*10}) scale(0.0${size*2})">
                            <g transform="" style="fill:${bg}">
                                <g>
                                    <path d="M0,0v500h500C500,223.853,276.142,0,0,0z"/>
                                </g>
                            </g>  
                        </g>`,
            p_dlSVG:    `<g xmlns="http://www.w3.org/2000/svg" transform="translate(${x*10}, ${y*10}) scale(0.0${size*2})">
                            <g transform="" style="fill:${bg}">
                                <g>
                                    <path d="M500,500V0H0C0.001,276.142,223.853,500,500,500z"/>
                                </g>
                            </g>
                        </g>`,
            p_drSVG:    `<g xmlns="http://www.w3.org/2000/svg" transform="translate(${x*10}, ${y*10}) scale(0.0${size*2})">
                            <g transform="" style="fill:${bg}">
                                <g>
                                    <path d="M500,0H0v500C276.142,500,500,276.142,500,0z"/>
                                </g>
                            </g>
                        </g>`,
            p_tl_trSVG: `<g xmlns="http://www.w3.org/2000/svg" transform="translate(${x*10}, ${y*10}) scale(0.0${size*2})">
                            <g transform="" style="fill:${bg}">
                                <path d="M500,250c0,58.266,0,250,0,250s-170.194,0-250-0.012c-62.324,0.012-250,0-250,0s0-174.241,0-249.994  C0.006,111.931,111.929,0,249.994,0C388.064,0,500,111.93,500,250z"/>
                            </g>
                        </g>`,
        
            p_dl_drSVG: `<g xmlns="http://www.w3.org/2000/svg" transform="translate(${x*10}, ${y*10}) scale(0.0${size*2})">
                            <g transform="" style="fill:${bg}">
                                <path d="M0,250C0,191.729,0,0,0,0s170.201,0,250,0c62.324,0,250,0,250,0s0,174.261,0,250c0,138.064-111.936,250-250,250  C111.929,500,0,388.064,0,250z"/>
                            </g>
                        </g>`,
            p_lt_ldSVG: `<g xmlns="http://www.w3.org/2000/svg" transform="translate(${x*10}, ${y*10}) scale(0.0${size*2})">
                            <g transform="" style="fill:${bg}">
                                <path d="M250,0c58.27,0,250,0,250,0s0,170.182,0,250c0,62.305,0,250,0,250s-174.219,0-250,0  C111.881,500,0,388.021,0,250C0,111.963,111.881,0,250,0z"/>
                            </g>
                        </g>`,
            p_rt_rdSVG: `<g xmlns="http://www.w3.org/2000/svg"  transform="translate(${x*10}, ${y*10}) scale(0.0${size*2})">
                            <g transform="" style="fill:${bg}">
                                <path d="M250,500c-58.271,0-250,0-250,0s0-170.207,0-250C0,187.676,0,0,0,0s174.261,0,250,0c138.064,0,250,111.929,250,250  C500,388.064,388.064,500,250,500z"/>
                            </g>
                        </g>`
        };
        return TempSVG[name];
    }
    logo(bg, sp){
        let a = 50 - (sp*1.75);
        if(this.props.logo){
            return `<svg fill="${bg}" class="qr_logo_svg" viewBox="0 0  134.17 134.17" width="${sp*3.5}%" height="${sp*3.5}%" x="${a}%" y="${a}%">
                        <g>
                            <rect height="110.999994" width="108.000009" y="10.585001" x="16.084998" fill="#fff"/>
                            <path  d="m57.63,64.14a14.19,14.19 0 1 0 -14.19,-14.14a14.19,14.19 0 0 0 14.19,14.14z"/>
                            <path  d="m117.71,-1l-101.25,0a16.46,16.46 0 0 0 -16.46,16.46l0,101.25a16.46,16.46 0 0 0 16.46,16.46l101.25,0a16.46,16.46 0 0 0 16.46,-16.46l0,-101.25a16.46,16.46 0 0 0 -16.46,-16.46zm-97.56,54a37.48,37.48 0 0 1 73.79,-9.32c-13.79,13 -24.67,27.22 -31.67,36.4c-1.71,2.24 -3.45,4.53 -4.76,6.14a214,214 0 0 1 -13.14,-20.13l-1.24,-2.09l-21,0a37.92,37.92 0 0 1 -1.98,-11zm100.85,-12c-31,30.21 -42.5,55.79 -54.43,71.4a11.54,11.54 0 0 1 -8.94,4.24c-3.34,0 -6.4,-1.12 -9.62,-5.16c-20.21,-25.41 -24.4,-43.22 -24.4,-43.22l17.07,0s13.91,23.74 16.95,23.74c3.3,0 28.37,-43.54 63.71,-63.71c0,-0.01 -0.34,12.63 -0.34,12.71z"/>
                        </g>
                    </svg>`;
        }
    }
    render(){
        const bg = this.props.color,        
              sp = Number(this.props.size);
        let boxSVG = this.TMP('startSVG'); 
        this.props.points.map(i => {
            let x = (100 / this.props.sizeSvg) * i[0]; // координаты точки в %
            let y = (100 / this.props.sizeSvg) * i[1];
            let size = this.props.sizePointProcent;
            let size_0 = '0.' + this.props.sizePointProcent;
            let point = i;
                point[0] = point[0] / sp;
                point[1] = point[1] / sp;
            let pointUp = [],
                pointDown = [],
                pointLeft = [],
                pointRight = [],
                up = false,
                down = false,
                left = false,
                right = false;
            //---------------------BIG-BOX---------------------
            if (point[0] === 0 && point[1] === 0)                      boxSVG += this.TMP('p_big_boxSVG1', x, y, size, size_0, bg);
            if (point[0] === (this.props.count - 7) && point[1] === 0) boxSVG += this.TMP('p_big_boxSVG2', x, y, size, size_0, bg);
            if (point[0] === 0 && point[1] === (this.props.count - 7)) boxSVG += this.TMP('p_big_boxSVG3', x, y, size, size_0, bg);
            //---------------------BIG-CIRCLE---------------------
            if ((point[0] === 4 && point[1] === 4) || (point[0] === 4 && point[1] === (this.props.count - 3)) || (point[0] === (this.props.count - 3) && point[1] === 4)) 
            { boxSVG += this.TMP('p_big_circleSVG',x, y, size, size_0, bg); }

            //         x                y   ----список исключений----
            if ((point[0] === 6 && point[1] === (this.props.count - 3)) || (point[0] === 6 && point[1] === (this.props.count - 4)) || (point[0] === 6 && point[1] === (this.props.count - 5)) || (point[0] === 6 && point[1] === (this.props.count - 6)) || (point[0] === 6 && point[1] === (this.props.count - 7)) || (point[0] === 5 && point[1] === (this.props.count - 7)) || (point[0] === 4 && point[1] === (this.props.count - 7)) || (point[0] === 2 && point[1] === (this.props.count - 7)) || (point[0] === 3 && point[1] === (this.props.count - 7)) || (point[0] === 0 && point[1] === (this.props.count - 5)) || (point[0] === 4 && point[1] === (this.props.count - 1)) || (point[0] === 3 && point[1] === (this.props.count - 1)) || (point[0] === 2 && point[1] === (this.props.count - 1)) || (point[0] === 0 && point[1] === (this.props.count - 4)) || (point[0] === 0 && point[1] === (this.props.count - 3)) || (point[0] === 0 && point[1] === (this.props.count - 2)) || (point[0] === 0 && point[1] === (this.props.count - 1)) || (point[0] === 4 && point[1] === 0) || (point[0] === 3 && point[1] === 0) || (point[0] === 2 && point[1] === 0) || (point[0] === 0 && point[1] === 4) || (point[0] === 0 && point[1] === 3) || (point[0] === (this.props.count - 3) && point[1] === 6) || (point[0] === (this.props.count - 4) && point[1] === 6) || (point[0] === (this.props.count - 5) && point[1] === 6) || (point[0] === (this.props.count - 6) && point[1] === 6) || (point[0] === (this.props.count - 7) && point[1] === 6) || (point[0] === (this.props.count - 7) && point[1] === 5) || (point[0] === (this.props.count - 7) && point[1] === 4) || (point[0] === (this.props.count - 7) && point[1] === 3) || (point[0] === (this.props.count - 7) && point[1] === 2) || (point[0] === (this.props.count - 1) && point[1] === 4) || (point[0] === (this.props.count - 1) && point[1] === 3) || (point[0] === (this.props.count - 1) && point[1] === 2) || (point[0] === (this.props.count - 1) && point[1] === 1) || (point[0] === (this.props.count - 1) && point[1] === 0) || (point[0] === (this.props.count - 3) && point[1] === 0) || (point[0] === (this.props.count - 4) && point[1] === 0) || (point[0] === (this.props.count - 5) && point[1] === 0) || (point[0] === 6 && point[1] === 2) || (point[0] === 6 && point[1] === 3) || (point[0] === 6 && point[1] === 4) || (point[0] === 6 && point[1] === 5) || (point[0] === 6 && point[1] === 6) || (point[0] === 5 && point[1] === 6) || (point[0] === 4 && point[1] === 6) || (point[0] === 3 && point[1] === 6) || (point[0] === 2 && point[1] === 6) || (point[0] === 0 && point[1] === 0) || (point[0] === 0 && point[1] === 1) || (point[0] === 0 && point[1] === 2) || (point[0] === 0 && point[1] === 5) || (point[0] === 0 && point[1] === 6) || (point[0] === 1 && point[1] === 6) || (point[0] === 1 && point[1] === 0) || (point[0] === 5 && point[1] === 0) || (point[0] === 6 && point[1] === 0) || (point[0] === 6 && point[1] === 1) || (point[0] === 4 && point[1] === 4) || (point[0] === 1 && point[1] === (this.props.count - 1)) || (point[0] === 0 && point[1] === (this.props.count - 6)) || (point[0] === 0 && point[1] === (this.props.count - 7)) || (point[0] === 1 && point[1] === (this.props.count - 7)) || (point[0] === 6 && point[1] === (this.props.count - 1)) || (point[0] === 5 && point[1] === (this.props.count - 1)) || (point[0] === 6 && point[1] === (this.props.count - 2)) || (point[0] === 4 && point[1] === (this.props.count - 3)) || (point[0] === (this.props.count - 2) && point[1] === 0) || (point[0] === (this.props.count - 6) && point[1] === 0) || (point[0] === (this.props.count - 7) && point[1] === 0) || (point[0] === (this.props.count - 7) && point[1] === 1) || (point[0] === (this.props.count - 1) && point[1] === 6) || (point[0] === (this.props.count - 1) && point[1] === 5) || (point[0] === (this.props.count - 2) && point[1] === 6) || (point[0] === 2 && point[1] === 2) || (point[0] === 2 && point[1] === 3) || (point[0] === 2 && point[1] === 4) || (point[0] === 3 && point[1] === 2) || (point[0] === 3 && point[1] === 4) || (point[0] === 4 && point[1] === 2) || (point[0] === 4 && point[1] === 3) || (point[0] === 2 && point[1] === (this.props.count - 5)) || (point[0] === 2 && point[1] === (this.props.count - 4)) || (point[0] === 2 && point[1] === (this.props.count - 3)) || (point[0] === 3 && point[1] === (this.props.count - 5)) || (point[0] === 3 && point[1] === (this.props.count - 3)) || (point[0] === 4 && point[1] === (this.props.count - 5)) || (point[0] === 4 && point[1] === (this.props.count - 4)) || (point[0] === (this.props.count - 5) && point[1] === 2) || (point[0] === (this.props.count - 5) && point[1] === 3) || (point[0] === (this.props.count - 5) && point[1] === 4) || (point[0] === (this.props.count - 4) && point[1] === 2) || (point[0] === (this.props.count - 4) && point[1] === 4) || (point[0] === (this.props.count - 3) && point[1] === 2) || (point[0] === (this.props.count - 3) && point[1] === 3) || (point[0] === (this.props.count - 3) && point[1] === 4) ) {
            // boxSVG += p_none;
            } else {

                point[0] = point[0] * sp;
                point[1] = point[1] * sp;
                pointUp.push(point[0]);
                pointUp.push(point[1]- sp);
                pointDown.push(point[0]);
                pointDown.push(point[1] + sp);
                pointLeft.push(point[0] - sp);
                pointLeft.push(point[1]); 
                pointRight.push(point[0] + sp);
                pointRight.push(point[1]);
                
                this.props.points.map(j => {
                    if ((j[0] === pointUp[0])    && (j[1] === pointUp[1]))    up    = true;
                    if ((j[0] === pointDown[0])  && (j[1] === pointDown[1]))  down  = true;
                    if ((j[0] === pointLeft[0])  && (j[1] === pointLeft[1]))  left  = true;
                    if ((j[0] === pointRight[0]) && (j[1] === pointRight[1])) right = true;
                    return true; 
                });

                if ((up && down && left && right) || (up && down && !left && !right) || (!up && !down && left && right) || (up && down && left && !right) || (up && down && !left && right) || (up && !down && left && right) || (!up && down && left && right)) 
                { boxSVG += this.TMP('p_boxSVG',x, y, size, size_0, bg); }
                if (!up && !down && !left && !right) boxSVG += this.TMP('p_circleSVG',x, y, size, size_0, bg);
                if (!up &&  down && !left &&  right) boxSVG += this.TMP('p_tlSVG',x, y, size, size_0, bg);
                if (!up &&  down &&  left && !right) boxSVG += this.TMP('p_trSVG',x, y, size, size_0, bg);
                if ( up && !down && !left &&  right) boxSVG += this.TMP('p_dlSVG',x, y, size, size_0, bg);
                if ( up && !down &&  left && !right) boxSVG += this.TMP('p_drSVG',x, y, size, size_0, bg);
                if ( up && !down && !left && !right) boxSVG += this.TMP('p_dl_drSVG',x, y, size, size_0, bg);
                if (!up &&  down && !left && !right) boxSVG += this.TMP('p_tl_trSVG',x, y, size, size_0, bg);
                if (!up && !down &&  left && !right) boxSVG += this.TMP('p_rt_rdSVG',x, y, size, size_0, bg);
                if (!up && !down && !left &&  right) boxSVG += this.TMP('p_lt_ldSVG',x, y, size, size_0, bg);
            }
            return true; 
        });

        boxSVG += this.logo(bg, sp); 

        boxSVG += this.TMP('endSVG');     
        this.props.svg(boxSVG);
        return( <div className="qr_wrapper" dangerouslySetInnerHTML={{ __html: boxSVG }}></div> );
    }
}

export default Template;
