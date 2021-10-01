import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoExtraParensOption = any;

/**
 * Options.
 */
export type NoExtraParensOptions = [NoExtraParensOption?];

/**
 * Disallow unnecessary parentheses
 *
 * @see [no-extra-parens](https://eslint.vuejs.org/rules/no-extra-parens.html)
 */
export type NoExtraParensRuleConfig = RuleConfig<NoExtraParensOptions>;

/**
 * Disallow unnecessary parentheses
 *
 * @see [no-extra-parens](https://eslint.vuejs.org/rules/no-extra-parens.html)
 */
export interface NoExtraParensRule {
  /**
   * Disallow unnecessary parentheses
   *
   * @see [no-extra-parens](https://eslint.vuejs.org/rules/no-extra-parens.html)
   */
  'vue/no-extra-parens': NoExtraParensRuleConfig;
}