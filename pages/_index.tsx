import { useEffect, useMemo, useState } from 'react';
import { Check, Flame, Plus, RotateCcw } from 'lucide-react';
import { Button } from '../components/Button';
import styles from './_index.module.css';

type Habit = { id: number; name: string; cue: string; streak: number; done: boolean };

const starterHabits: Habit[] = [
  { id: 1, name: 'Deep work', cue: '45 focused minutes', streak: 8, done: true },
  { id: 2, name: 'Move', cue: '20 minutes minimum', streak: 5, done: false },
  { id: 3, name: 'Read', cue: '10 pages', streak: 12, done: true },
  { id: 4, name: 'Create', cue: 'Make one thing', streak: 4, done: false },
];

export default function HabitTracker() {
  const [habits, setHabits] = useState<Habit[]>(starterHabits);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    const saved = localStorage.getItem('habit-tracker-v1');
    if (saved) setHabits(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('habit-tracker-v1', JSON.stringify(habits));
  }, [habits]);

  const complete = habits.filter(h => h.done).length;
  const percent = habits.length ? Math.round((complete / habits.length) * 100) : 0;
  const bestStreak = useMemo(() => Math.max(0, ...habits.map(h => h.streak)), [habits]);

  const toggle = (id: number) => setHabits(items => items.map(h => h.id === id ? { ...h, done: !h.done } : h));
  const addHabit = () => {
    const name = window.prompt('What habit do you want to build?');
    if (!name?.trim()) return;
    setHabits(items => [...items, { id: Date.now(), name: name.trim(), cue: 'Daily', streak: 0, done: false }]);
  };
  const resetDay = () => setHabits(items => items.map(h => ({ ...h, done: false })));

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div>
          <div className={styles.eyebrow}>DAILY PRACTICE / TODAY</div>
          <h1>Keep the promise.</h1>
          <p>Small actions, repeated until they become identity.</p>
        </div>
        <Button onClick={addHabit}><Plus size={16} /> Add habit</Button>
      </header>

      <section className={styles.scoreboard}>
        <div className={styles.score}>
          <span className={styles.bigNumber}>{percent}%</span>
          <span className={styles.scoreLabel}>today's score</span>
        </div>
        <div className={styles.progressWrap}>
          <div className={styles.progressMeta}><span>{complete} of {habits.length} complete</span><span>Finish strong</span></div>
          <div className={styles.track}><div className={styles.fill} style={{ width: `${percent}%` }} /></div>
        </div>
        <div className={styles.streak}><Flame size={18} /><div><strong>{bestStreak}</strong><span>best streak</span></div></div>
      </section>

      <section className={styles.listSection}>
        <div className={styles.sectionTitle}><h2>Today's habits</h2><button onClick={resetDay}><RotateCcw size={14} /> Reset day</button></div>
        <div className={styles.list}>
          {habits.map((habit, index) => (
            <button key={habit.id} className={`${styles.habit} ${habit.done ? styles.done : ''}`} onClick={() => toggle(habit.id)}>
              <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
              <span className={styles.check}>{habit.done && <Check size={18} strokeWidth={3} />}</span>
              <span className={styles.habitCopy}><strong>{habit.name}</strong><small>{habit.cue}</small></span>
              <span className={styles.habitStreak}><Flame size={14} /> {habit.streak} days</span>
            </button>
          ))}
        </div>
      </section>

      <footer><span>Consistency beats intensity.</span><span>Stored on this device</span></footer>
    </main>
  );
}
