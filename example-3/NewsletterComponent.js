import React from 'react';
import { post } from './RequestService';

class NewsletterComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            error: false,
            success: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
    }

    handleChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    async handleSubmit(e) {
        e.preventDefault();

        // clear the errors
        this.setState({
            error: false
        });

        const { email } = this.state;
        const response = await post('http://completely-fake.website/api/newsletter', { email });

        if (!response.ok) {
            if (response.status === 422) {
                return this.setState({
                    error: 'Your email is invalid'
                });
            }

            return this.setState({
                error: 'An error occurred'
            })
        }

        this.setState({
            success: true
        });
    }

    render() {
        return (
            <div className="newsletter-container">
                {this.state.success ? (
                    <>
                        <h4>Thank you for signing up!</h4>
                    </>
                ) : (
                    <>
                        <h4>Sign up to our Newsletter!</h4>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChangeEmail}
                                required={true}
                            />
                            <button role="submit">
                                Submit
                            </button>
                            {this.state.error && <p className="error">{this.state.error}</p>}
                        </form>
                    </>
                )}
            </div>
        )
    }
}

export default NewsletterComponent;