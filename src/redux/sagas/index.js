export default function* workerSaga() {
	console.log("Saga yeild");
}
export default function* watchClickSaga() {
	console.log("Saga yeild");
}


export default function* rootSaga(){
	yield watchClickSaga();
}