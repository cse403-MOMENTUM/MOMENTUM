/**
 * This file contains several functions related to EBS. It's principal function
 */

import { List } from 'immutable';
import { Task } from '../models/Task';

/**
 * Creates and returns a list of velocities for the given list of tasks.
 * One velocity is calculated for each completed task.
 * Velocity is the measure of an individual task's estimated time divided by
 * the actual time it took to complete that task.
 * @param tasks The list of tasks to compute velocities for.
 */
function getVelocities(tasks: List<Task>) {
  let velocities = List<number>();

  // Loop over tasks, and add all velocities for completed tasks
  for (let i = 0; i < tasks.count(); i++) {
    const currentTask = tasks.get(i);

    // Add task velocity calculation if task is complete
    if (currentTask.isComplete) {
      velocities = velocities.push(
        currentTask.estimate / currentTask.seconds_spent);
    }
  }
  return velocities;
}

/**
 * Returns a new list of tasks that have not yet been completed
 * @param tasks The list of tasks to create a new list of incomplete tasks from
 */
function getIncompleteTasks(tasks: List<Task>) {
  return tasks.filter((task: Task) => !task.isComplete);
}

/**
 * Computes a histogram-like distribution of potential effort needed to complete
 * the remaining incomplete tasks.
 * @param tasks
 * @param samples
 */
export function getEffortDistribution(tasks: List<Task>, samples: number) {
  const velocities = getVelocities(tasks);
  const incompleteTasks = getIncompleteTasks(tasks);

  // We run a simulation that calculates a potential effort estimate for the
  // given number of samples, placing each estimate in a distribution that
  // will be returned
  const distribution = List<number>();
  for (let i = 0; i < samples; i++) {
    let effortEstimate = 0;
    for (let j = 0; j < incompleteTasks.count(); j++) {
      const randomVelocity = velocities.get(getRandomInt(velocities.count()));
      effortEstimate += incompleteTasks.get(j).estimate / randomVelocity;
    }
    const index = Math.floor(effortEstimate);
    distribution.set(index, distribution.get(index) + 1);
  }
  return distribution;
}

/**
 *
 * @param tasks
 */
export function getStandardDeviation(tasks: List<Task>) {
  // TODO Implement
}

/**
 * Returns a random integer between 0 (inclusive) and the given max (exclusive).
 * @param max The exlusive maximum value to be returned
 */
function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}
