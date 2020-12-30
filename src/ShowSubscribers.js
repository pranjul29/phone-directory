import React, {Component} from 'react';
import Header from "./Header"
import "./ShowSubscribers.css"

class ShowSubscribers extends Component {

    render() {

        return (
            <div>
                <Header heading="Phone Directory"/>
                <div className="component-body-container">
                    <button className="custom-btn add-btn">Add</button>

                    <div className="grid-container heading-container">
                        <span className="grid-item name-heading">Name</span>
                        <span className="grid-item phone-heading">Phone</span>
                    </div>
                    {
                        this.props.subscribersList.map(sub => {
                            return <div key={sub.id} className="grid-container">
                                <span className="grid-item">{sub.name}</span>
                                <span className="grid-item">{sub.phone}</span>
                                <button className="custom-btn del-btn">Delete</button>
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ShowSubscribers;