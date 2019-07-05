import React from 'react';

class Child extends React.Component {
    state = {
        tilie:'adad'
    }

    render() {
        console.log(this)
        return (
            <div>Child</div>
        )
    }
}
export default Child