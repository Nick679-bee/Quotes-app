import { TimePastPipe } from './date-count.pipe';

describe('DateCountPipe', () => {
  it('create an instance', () => {
    const pipe = new TimePastPipe();
    expect(pipe).toBeTruthy();
  });
});
