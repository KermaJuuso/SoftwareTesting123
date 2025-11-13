
import * as modlib from 'modlib';

function OngoingGlobal_New_Rule_Action() {
}
function OngoingGlobal_New_Rule(conditionState: any) {
let newState = true;
if (!conditionState.update(newState)) {
 return;
}
OngoingGlobal_New_Rule_Action();
}

function OnGameModeEnding_New_Rule_Action() {
}
function OnGameModeEnding_New_Rule(conditionState: any) {
let newState = true;
if (!conditionState.update(newState)) {
 return;
}
OnGameModeEnding_New_Rule_Action();
}

// global vars

// player vars

// team vars

// capture point vars

// mcom vars

// vehicle vars

export function OngoingGlobal() {
const eventInfo = {};
let eventNum = 0;
  OngoingGlobal_New_Rule(modlib.getGlobalCondition(eventNum++));
}

export function OnGameModeEnding() {
const eventInfo = {};
let eventNum = 1;
  OnGameModeEnding_New_Rule(modlib.getGlobalCondition(eventNum++));
}


// 