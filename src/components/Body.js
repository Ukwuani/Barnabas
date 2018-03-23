import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import MessageItems from './Messageitems'
import Snackbar from 'material-ui/Snackbar'
import '../App.css'


class Body extends Component {
    constructor (props) {
        super (props);
        this.state = {
            data: [],
            open: false
        }
    }

    SnackClose = () => {
        this.setState({
          open: false,
        });
      };

    delete (id) {
        var arr = this.state.data;
        var got = arr.indexOf(id);        
        arr.splice(got,1);
        this.setState({data: arr});        
    }

    afterSelect (e) {
        var me = e.target.files;
        var arr = this.state.data;
        let i = 0;      
           
        var yellc = (eme, gotFil) => {
            return eme === gotFil;
        };

        for (var j=0; j < me.length; j++ ) {
            console.log(me[j].name)    
            arr.forEach((e) => {
                if (arr !== []) {
                    if ( yellc(e, me[j].name)) {
                        i+=1
                    }}
            });

            i === 0 ? arr.push(me[j].name) : this.setState({open: true});        
        this.setState({data: arr});
        }
    }

    render () {
        
      return (
          
        <div>
            <RaisedButton
                    className="cells large-4"
                    label="Upload file"
                    labelPosition="before"
                    primary={true}
                    style = {styles.button}
                    containerElement="label"
                    >
                    <input onChange = {this.afterSelect.bind(this)} ref="input" type="file" style={styles.exampleImageInput}  multiple/>
                    </RaisedButton>
           { this.state.data.length <= 0 ? '' : <FormPlace delete= {this.delete.bind(this)} data={this.state.data}/> }
        
        <Snackbar
          open={this.state.open}
          message="The message is already in the message list"
          autoHideDuration={4000}
          onRequestClose={this.SnackClose}
        />
        </div>
      );
    }
 
  }

  Body.propTypes = {
      text: PropTypes.string
  }


  //Display the form... This form should be submitted

  class FormPlace extends Component {
      constructor(props) {
        super(props);
      }

    delit (id) {
        this.props.delete(id);
    }
      render () {
          return (
              <form >
                  <div className = "grid-y cover" >
                  <div className = "cell medium-auto large-auto large-cell-block-container medium-cell-block-container">
                  <div className = "cell medium-cell-block-y large-cell-block-y cover_sm">
                  {this.props.data.map((Comp, id) => <CardFul key = {id} data = {Comp} deleteN = {this.delit.bind(this)}  />)}
                  </div>
                  </div>

                  <div className="cell shrink footer">
                        <RaisedButton
                            className = "No_Butt_Padding"
                            label="Submit"
                            primary={true}
                            style={styles.button}
                            containerElement="label">
                            <input  onChange={this.getList} style={styles.exampleImageInput}  />
                            </RaisedButton>
                    </div>

                    </div>
              </form>
          );
      }
  }


  //Display fields of the form... This contents are to be uploaded

  class CardFul extends Component {
      constructor (props) {
          super (props);
      }

      delit (id) {
        this.props.deleteN(id);
    }

      render () {
          return (
            <fieldset style = {styles.fieldset}  >
                <MessageItems data={this.props.data} delit= {this.delit.bind(this)}/>
                    
                </fieldset>
          );
      }
  }

  const styles = {
    button: {
        margin: 12,
      },
      fieldset: {
          borderColor: 'rgba(1,1,1,0)',
      },
      datepick: {
          margin: 0
      },
      cardshit: {
        padding: '1em',
        borderRadius: '1em',
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

  export default Body;
