import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {
    FormGroup,
    ControlLabel,
    FormControl,
    Button
} from 'react-bootstrap';
import Select2 from 'react-select2-wrapper';
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css'

class Body extends Component {
    constructor(props) {
        super(props);

        const { speakers } = this.props;
        let speakersData = [];

        for (var i = 0; i < speakers.length; i++) {
            speakersData.push({
                text: speakers[i].firstName + " " + speakers[i].lastName,
                id: speakers[i]._id
            });
        }

        this.state = {
            titleValue: '',
            speakersData: speakersData,
            speakerValue: '',
            scheduleValue: '',
            locationValue: 'none'
        };
        this.handleTitleValueChange = this.handleTitleValueChange.bind(this);
        this.handleSpeakerValueChange = this.handleSpeakerValueChange.bind(this);
        this.handleScheduleValueChange = this.handleScheduleValueChange.bind(this);
        this.handleLocationValueChange = this.handleLocationValueChange.bind(this);
        this.handleAddNewSeminarSubmit = this.handleAddNewSeminarSubmit.bind(this);
    }
    handleTitleValueChange(event) {
        this.setState({titleValue: event.target.value})
    }
    handleSpeakerValueChange(event) {
        this.setState({speakerValue: event.target.value})
    }
    handleScheduleValueChange(newDate) {
        this.setState({scheduleValue: newDate});
    }
    handleLocationValueChange(event) {
        this.setState({locationValue: event.target.value})
    }
    handleAddNewSeminarSubmit(event) {
        event.preventDefault();

        const { handleAddNewSeminarSubmit } = this.props;
        let newSeminar = [];
        let title = this.state.titleValue;
        let speaker = this.state.speakerValue;
        let schedule = this.state.scheduleValue;
        let location = this.state.locationValue;

        console.log(speaker);
        if (title == '') {
            alert("Please fill out all the required fields");
        }
        else {
            newSeminar.push({
                title,
                speaker,
                schedule,
                location
            });
            handleAddNewSeminarSubmit(newSeminar);
            browserHistory.push('/admin/seminars');
        }
    }

    render() {
        const {
            handleTitleValueChange,
            handleSpeakerValueChange,
            handleScheduleValueChange,
            handleLocationValueChange,
            handleAddNewSeminarSubmit
        } = this;
        const {
            titleValue,
            speakersData,
            speakerValue,
            scheduleValue,
            locationValue
        } = this.state;

        return(
            <div>
                <div className="section">
                    <div className="section-body">
                        <FormGroup
                            bsClass=
                                {
                                    titleValue == ""
                                        ?
                                        "form-group has-error"
                                        :
                                        "form-group"
                                }
                        >
                            <ControlLabel bsClass="col-md-3 control-label" htmlFor="title">
                                Title (required)
                            </ControlLabel>
                            <div className="col-md-9">
                                <FormControl
                                    id="title"
                                    type="text"
                                    value={titleValue}
                                    onChange={handleTitleValueChange}
                                    placeholder=""
                                />
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel bsClass="col-md-3 control-label">
                                Speaker
                            </ControlLabel>
                            <div className="col-md-9">
                                <Select2
                                    defaultValue={speakerValue}
                                    data={speakersData}
                                    onChange={handleSpeakerValueChange}
                                />
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel bsClass="col-md-3 control-label">
                                Schedule
                            </ControlLabel>
                            <div className="col-md-9">
                                <DateTime
                                    defaultValue={scheduleValue}
                                    onChange={handleScheduleValueChange}
                                />
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel bsClass="col-md-3 control-label">
                                Location
                            </ControlLabel>
                            <div className="col-md-9">
                                <Select2
                                    defaultValue={locationValue}
                                    data={[
                                        {text: 'None', id: 'none'},
                                        {text: 'Bulwagang Balagtas, Main', id: 'bulwagang-balagtas'},
                                        {text: 'Claro M. Recto, Main', id: 'claro-m-recto'},
                                        {text: 'ICTC, Main', id: 'ictc'},
                                        {text: 'PUP Theater, College of Communication', id: 'pup-theater'},
                                        {text: 'AVR, College of Engineering And Architecture', id: 'avr-cea'},
                                        {text: 'AVR, College of Technology', id: 'avr-cot'},
                                        {text: 'Manila Room, Hasmin', id: 'manila-room'}
                                    ]}
                                    onChange={handleLocationValueChange}
                                />
                            </div>
                        </FormGroup>
                    </div>
                </div>
                <div className="form-footer">
                    <div className="form-group">
                        <div className="col-md-9 col-md-offset-3">
                            <Button bsStyle="primary" onClick={handleAddNewSeminarSubmit}>
                                Add New Seminar
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;