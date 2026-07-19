import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Story() {
  const ref = useScrollReveal();

  return (
    <section className="story">
      <div className="wrap reveal" ref={ref}>
        <div className="mark">"</div>
        <div>
          <h2>Cooked like it's Sunday at home, every day of the week.</h2>
          <p>
            Sircilla is known for its handloom — every thread set with care before it's woven. We cook
            the same way: whole spices roasted and ground fresh, meat marinated hours ahead, rice steamed
            in small batches so nothing sits. No shortcuts, no pre-mixed masalas — just the food this
            town has always eaten.
          </p>
        </div>
      </div>
    </section>
  );
}
