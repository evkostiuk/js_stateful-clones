'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const result = [];
  const newState = { ...state };

  for (const act of actions) {
    if (act.type === 'addProperties') {
      Object.assign(newState, act.extraData);
    }

    if (act.type === 'removeProperties') {
      for (const rem of act.keysToRemove) {
        delete newState[rem];
      }
    }

    if (act.type === 'clear') {
      for (const key in newState) {
        delete newState[key];
      }
    }

    result.push({ ...newState });
  }

  return result;
}

module.exports = transformStateWithClones;
