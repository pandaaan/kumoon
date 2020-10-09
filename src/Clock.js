import React from 'react';


class Clock extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            time: new Date()
        }

    }

    componentDidMount() {

        setInterval(this.update, 1000)

    }

    update = () => {

        this.setState({
            time: new Date()
        })

    };

    render() {

        const h = this.state.time.getHours()
        const m = this.state.time.getMinutes()

        return (

            <h1>{h % 12}:{(m < 10 ? '0' + m : m)}{h < 12 ? 'AM' : 'PM'}</h1>

        )

    }

}

export default Clock;