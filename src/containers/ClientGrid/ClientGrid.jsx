import React, { Component } from 'react'
import Client from '../Clients/Client';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import './ClientGrid.css'
import EmptyClient from './EmptyClient';

class ClientGrid extends Component {

    state = {
        list: [<Client id={0}/>]
    }

    componentDidMount() {
        this.setState({
            list: [...this.state.list, <EmptyClient addToGridCallback={this.appendClient} />]
        })
    }

    appendClient() {
        console.log('appendClient called')
        console.log(this.state)
        /*
        let newList = this.state.list
        newList.splice(0, newList.length, <Client id={newList.length-1} />)

        this.setState({
            list: newList
        })
        */
    }

    render () {
        return (
            <div className="client-grid">
                {
                    this.state.list.map((client, index) => {
                        return (
                            <div className="item" key={index} >
                                <ErrorBoundary>
                                    {client}
                                </ErrorBoundary>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default ClientGrid;