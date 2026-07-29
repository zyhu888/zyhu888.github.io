const recipient = "zeyu.hu8888@gmail.com";
const dialog = document.querySelector("[data-contact-dialog]");
document.querySelector("[data-contact-open]")?.addEventListener("click", () => dialog?.showModal());
document.querySelector("[data-contact-close]")?.addEventListener("click", () => dialog?.close());
dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
document.querySelector("[data-contact-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();
  const subject = `Website message from ${name}`;
  const body = `Name: ${name}\nReply-to: ${email}\n\n${message}`;
  const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1" +
    `&to=${encodeURIComponent(recipient)}` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;
  const draftWindow = window.open(gmailUrl, "_blank", "noopener,noreferrer");
  if (!draftWindow) window.location.href = gmailUrl;
  form.reset();
  dialog?.close();
});
