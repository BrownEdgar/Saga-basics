import  { take,takeEvery,takeLatest,takeLeading } from "redux-saga/effects";

const wait = (t) => new Promise((resolve) => {
	setTimeout(resolve, t);
}) 


// export function* workerSaga(){
// 	yield wait(1200)
// 	console.log("Click with saga");
// }
const getPeople = async() => {  
	const request = await fetch("https://swapi.dev/api/people")
	const data = await request.json();
	return data;
}
export function* workerSaga() {
	const data = yield getPeople();
	console.log(data);
}
export function* watchClickSaga() {
	// while (true) {
	// 	yield take("CLICK");
	// 	yield workerSaga();
	// }
	// ամեն "CLICK" "action"-ի ժամանակ կաշխատի, 
	// yield takeEvery("CLICK", workerSaga )
	// Եթե օրինակ async զապռոս լինի կկատարի վերջինը, "onChange"-ի ժամանակ անընդհատ "call" չի անի
	// yield takeLatest("CLICK", workerSaga );
	//takeLeading Աշխատացնում է միայն առաջինը, մնացածը անտեսվում են
	yield takeLatest("CLICK", workerSaga );

}


export default function* rootSaga(){
	yield watchClickSaga();
}
