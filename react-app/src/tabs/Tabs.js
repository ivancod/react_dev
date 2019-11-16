import React from 'react';
import EnterStr from './EnterStr.js';
import EnterWIFI from './EnterWIFI.js';

class Tabs extends React.Component{
    constructor(props) {
        super(props);
        this.state = { tab: 0 };
        this.changeItem = this.changeItem.bind(this);
    }
    changeItem(e){
        this.setState({ 
            tab: e.target.getAttribute('data-id')
        });
        let content = document.querySelectorAll('.tabs__content');
        content.forEach(item => {
            item.classList.remove("active-tab");
        });
        content[ e.target.getAttribute('data-id') ].classList.add("active-tab");
    }
    render(){
        const li = this.props.items.map(item => {
            let active = 'tabs__list-item';
            if(item.id === this.state.tab) active += ' active-tab ';
            return <li className={ active } onClick={ this.changeItem } data-id={ item.id } key={ item.id }>{ item.title }</li>
        });
        return(
            <div className="container flex">
                <div className="tabs">
                    <ul className="tabs__list flex">
                        { li }
                    </ul>
                    <div className="tabs__content flex active-tab">
                        <EnterStr />
                    </div>
                    <div className="tabs__content">
                        <EnterWIFI />
                    </div>
                </div>
            </div>
        );
    }
}

export default Tabs;
