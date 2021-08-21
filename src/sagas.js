import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as api from './api'
import actions, { INIT_APP, HANDLE_JOKE } from './actions'

export function* handleInit() {
    try {
        yield put(actions.startLoading())
        const ping = yield call(api.ping)

        if (ping.ok) {
            yield put(actions.receiveMessage({ from: 'chatbot', message: 'Hello, how may I help you?' }))
        }
        yield put(actions.stopLoading())
    } catch (error) {
        yield put(actions.stopLoading())
        console.log(error)
    }
}

export function* handleJoke() {
    try {
        const joke = yield call(api.fetchJoke)
        yield put(actions.receiveJoke(joke))
    } catch (error) {
        yield put(actions.stopLoading())
        console.log(error)
    }
}

export function* defineSagaListeners() {
    yield takeLatest(INIT_APP, handleInit)
    yield takeEvery(HANDLE_JOKE, handleJoke)
    // yield [
    //   takeLatest(INIT_APP, testInit),
    //   takeEvery(SAGA_POWERFORM_SUBMIT, handleSubmitPowerform),
    //   takeEvery(SAGA_LOCALE_CHANGE, handleLanguageChange),
    // ]
}