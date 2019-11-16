import React from 'react';
import Genery from '../genery/Genery.js';
import ExportSVG from '../components/ExportSVG.js';


class EnterStr extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            str: 'https://revizion.ua',
            color: '#000',
            logo: true,
            layer: 'Q',
            wrap: 'td_custom_qr'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLogo = this.handleLogo.bind(this);
        this.handleColor = this.handleColor.bind(this);
    }
    handleChange(e){
        this.setState({ str: e.target.value });
    }
    handleLogo(){
        this.setState({ logo: !this.state.logo });
        if(this.state.logo) {
            this.setState({ layer: 'L' });
        } else {
            this.setState({ layer: 'Q' });
        }
    }
    handleColor(e){
        this.setState({ color: e.target.value });
    }

    updateSVG = (svg) => {
        if(this.state.svg !== svg){
            this.setState({ svg: svg });
        }
    }
    render(){
        return (
            <div className="container flex">
                <div className="td_custom_qr">
                    <Genery string={ this.state.str } svg={ this.updateSVG } logo={ this.state.logo } wrap={ this.state.wrap } layer={ this.state.layer } color={ this.state.color } />
                </div>
                <div className="td_optins">
                    <div className="url_wrap">
                        <input type="text" onChange={ this.handleChange } defaultValue={ this.state.str } />
                    </div>
                    <hr />
                    <div className="qr_bgcolor_label"> Цвет QR-кода <input type="color" defaultValue={ this.state.color } onChange={ this.handleColor } className="qr_bgcolor" /></div>
                    <span className="qr_active_logo" onClick={ this.handleLogo } >{ this.state.logo ? 'Убрать логотип' : 'Добавить логотип' }</span>
                    <ExportSVG svg={ this.state.svg } name={ this.state.str } />
                </div>
            </div>
        );
    }
}

export default EnterStr;
