import React from 'react';
import Genery from '../genery/Genery.js';
import ExportSVG from '../components/ExportSVG.js';

class EnterWIFI extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            ssid: 'KYIVSTAR 2.4G',
            pass: 'Revizion2017',
            color:'#000',
            type: 'WPA',
            logo:  true,
            svg:   '',
            layer: `Q`
        };
        this.handleSsid = this.handleSsid.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.handleColor = this.handleColor.bind(this);
        this.handleLogo = this.handleLogo.bind(this);
        
    }
    handleSsid(e){
        this.setState({ ssid: e.target.value });
    }
    handlePass(e){
        this.setState({ pass: e.target.value });
    }
    handleColor(e){
        this.setState({ color: e.target.value });
    }
    handleType(e){
        this.setState({ type: e.target.value });
    }
    handleLogo(){
        this.setState({ logo: !this.state.logo });
        if(this.state.logo) {
            this.setState({ layer: 'L' });
        } else {
            this.setState({ layer: 'Q' });
        }
    }
    updateSVG = (svg) => {
        if(this.state.svg !== svg){
            this.setState({ svg: svg });
        }
    }
    render(){
        return( 
        <div className="container flex">
            <div className="td_custom_qr">
                <Genery svg={ this.updateSVG } string={ `WIFI:S:${ this.state.ssid };T:${ this.state.type };P:${ this.state.pass };` } wrap={ this.state.wrap } layer={ this.state.layer } color={ this.state.color } logo={ this.state.logo } />
            </div>
            <div className="td_optins td_options_wifi">
                <div className="url_wrap">
                    <input type="text" onChange={ this.handleSsid } placeholder="Название сети" value={ this.state.ssid } />
                    <br />
                    <input type="password" onChange={ this.handlePass } placeholder="Пароль" value={ this.state.pass } />
                    <span> Тип подлючения </span>
                    <div className="flex">
                        <label className="flex"> WPA
                            <input type="radio" onClick={ this.handleType } name="contact" value="WPA" />
                        </label>
                        <label className="flex"> WPA/WPA2
                            <input type="radio" onClick={ this.handleType } name="contact" value="WPA/WPA2" />
                        </label>
                    </div>
                </div>
                <hr />
                <div className="qr_bgcolor_label"> Цвет QR-кода <input type="color" onChange={ this.handleColor }  name='qr_bgcolor' value={ this.state.color } className="qr_bgcolor" /></div>
                <span className="qr_active_logo" onClick={ this.handleLogo } > { this.state.logo ? 'Убрать логотип' : 'Добавить логотип' } </span>                
                <ExportSVG svg={ this.state.svg } name={ this.state.ssid } />
            </div>
        </div>);
    }
}

export default EnterWIFI;
