import React, {Component} from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LabelAndInput from '../common/form/labelAndInput'
import {init} from './billingCycleActions'

class BillingCycleForm extends Component {

    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} cols='12 4' 
                        label='Nome' placeholder='Informe o nome'/>
                    <Field name='month' component={LabelAndInput} cols='12 4' 
                        type='number' label='Mês' placeholder='Informe o mês' />
                    <Field name='year' component={LabelAndInput} cols='12 4' 
                        type='number' label='Ano' placeholder='Informe o ano' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <button type='button' onClick={this.props.init} className='btn btn-default'>Cancel</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)