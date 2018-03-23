import React, { Component } from 'react'
import DatePicker from 'material-ui/DatePicker';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/content/remove-circle';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import '../App.css';

class Messageitems extends Component {
   

    deleteIt (id) {
        this.props.delit(id);
    }

    render () {
        return (
            <div 
                className = "Card_View animated bounceInDown"> 
                <div className = "grid-x">
                <div className = "cell large-5 medium-5 small-5"
                 style={styles.datepick}>
                <DatePicker
                    className="cell large-5"
                    hintText="Choose date"/>
                </div>
                
                <div
                    className = "cell large-5 medium-5 small-5 No_Butt_Padding ">
                    <span> 
                    {this.props.data}
                    </span>
                </div>

                <div className= "cell large-2 medium-2 small-2 No_Butt_Padding">
                <IconButton onClick= {this.deleteIt.bind(this, this.props.data)} tooltip="delete" touch={true} tooltipPosition="bottom-right">
                    <ActionGrade />
                    </IconButton>
                        
                </div>
                </div>
                
                </div>
        );
    }
}

const styles = {
      fieldset: {
          borderColor: 'rgba(1,1,1,0)',
      },
      datepick: {
          margin: 0
      },
      cardshit: {
        padding: '1em',
        backgroudColor: 'rgba(48, 48, 48, 0.48)',
        borderRadius: '2em',
        flexDirection: 'row',
      },
      exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
      },

    };

export default Messageitems;
