import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoUseVIfWithVForOption = {
  /**
   * @see [no-use-v-if-with-v-for](https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html)
   */
  allowUsingIterationVar?: any;
};

/**
 * Options.
 */
export type NoUseVIfWithVForOptions = [NoUseVIfWithVForOption?];

/**
 * disallow use v-if on the same element as v-for
 *
 * @see [no-use-v-if-with-v-for](https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html)
 */
export type NoUseVIfWithVForRuleConfig = RuleConfig<NoUseVIfWithVForOptions>;

/**
 * disallow use v-if on the same element as v-for
 *
 * @see [no-use-v-if-with-v-for](https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html)
 */
export interface NoUseVIfWithVForRule {
  /**
   * disallow use v-if on the same element as v-for
   *
   * @see [no-use-v-if-with-v-for](https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html)
   */
  'vue/no-use-v-if-with-v-for': NoUseVIfWithVForRuleConfig;
}
