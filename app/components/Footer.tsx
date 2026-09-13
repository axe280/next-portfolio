export default function Footer() {
  return (
    <div className="c-wrapper bg-foreground text-background py-10 relative z-50">
      <div className="c-container">
        <div className="grid gap-4">
          <div className="space-y-4">
            <div className="text-4xl">Hire Me for Your Next Big Project!</div>
            <div>
              <ul className="flex items-center uppercase gap-4">
                <li>
                  <a href="#">telegram</a>
                </li>
                <li>
                  <a href="#">email</a>
                </li>
                <li>
                  <a href="#">whatsapp</a>
                </li>
                <li>
                  <a href="#">linkedin</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
