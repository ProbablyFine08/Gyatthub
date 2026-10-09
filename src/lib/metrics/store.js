"use client";

/**
 * LearningStore provides a simple interface for persisting user progress
 * and knowledge mapping in localStorage.
 */

const STORAGE_KEY = "framework_buddy_learning_state";

const INITIAL_STATE = {
  metrics: {
    totalQuestions: 0,
    milestonesReached: 0,
    frameworksExplored: [],
    lastActive: null,
  },
  knowledgeMap: {
    concepts: {}, // conceptName: { status: 'introduced' | 'learned', timestamp: string }
    connections: [],
  },
};

export function getLearningState() {
  if (typeof window === "undefined") return INITIAL_STATE;

  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return INITIAL_STATE;

  try {
    return JSON.parse(saved);
  } catch (e) {
    console.error("Failed to parse learning state:", e);
    return INITIAL_STATE;
  }
}

export function saveLearningState(state) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function incrementQuestionCount() {
  const state = getLearningState();
  state.metrics.totalQuestions += 1;
  state.metrics.lastActive = new Date().toISOString();
  saveLearningState(state);
  return state.metrics.totalQuestions;
}

export function markMilestone() {
  const state = getLearningState();
  state.metrics.milestonesReached += 1;
  saveLearningState(state);
  return state.metrics.milestonesReached;
}

export function trackFramework(frameworkSlug) {
  const state = getLearningState();
  if (!state.metrics.frameworksExplored.includes(frameworkSlug)) {
    state.metrics.frameworksExplored.push(frameworkSlug);
    saveLearningState(state);
  }
}

export function markConcept(concept, status = "introduced") {
  const state = getLearningState();
  state.knowledgeMap.concepts[concept] = {
    status,
    timestamp: new Date().toISOString(),
  };
  saveLearningState(state);
}
