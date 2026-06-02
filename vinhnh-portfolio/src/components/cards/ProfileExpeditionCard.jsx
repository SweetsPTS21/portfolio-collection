export default function ProfileExpeditionCard({ profile }) {
  return (
    <article className="profile-expedition-card ice-card">
      <div className="goggles" aria-hidden="true"><span /><span /></div>
      <p>Hồ sơ thám hiểm</p>
      <h2>{profile.name}</h2>
      <strong>{profile.field}</strong>
      <span>{profile.school}</span>
    </article>
  );
}
