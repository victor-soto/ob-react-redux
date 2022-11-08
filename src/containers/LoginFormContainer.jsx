import { connect } from "react-redux"
import LoginForm from "../pure/LoginForm"
import { httpRequest } from "../store/actions/asyncActions"

const mapStateToProps = (state) => {
  return { logged: state.userState.logged, fetching: state.userState.fetching }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => {
      const data = { email, password }
      const url = 'https://reqres.in/api/login'
      dispatch(httpRequest('post', url, data))
    }
  }
}

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm)
export default LoginFormContainer