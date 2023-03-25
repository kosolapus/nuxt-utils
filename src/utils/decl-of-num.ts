/**
 * Возвращает правильную форму слова для данного числа в зависимости от его склонения.
 *
 * @param {number} number - Число, для которого нужно определить склонение.
 * @param {[string, string, string]} titles - Массив из трех форм слова: формы единственного числа, формы, используемой для чисел, оканчивающихся на 2, 3 или 4, и формы, используемой для всех остальных чисел, соответственно.
 * @returns {string} Правильная форма слова для данного числа.
 */
export const declOfNum = (
  number: number,
  titles: [string, string, string]
): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  const index =
    number % 100 > 4 && number % 100 < 20 ? 2 : cases[Math.min(number % 10, 5)];

  return titles[index];
};
