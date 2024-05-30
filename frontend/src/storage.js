// src/storage.js
import storage from 'node-persist';

export async function initStorage() {
  await storage.init();
}

export async function saveScore(score) {
  let scores = await storage.getItem('scores') || [];
  scores.push(score);
  await storage.setItem('scores', scores);
}

export async function getScores() {
  return await storage.getItem('scores') || [];
}
