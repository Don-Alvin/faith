const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/anadoomollo@zohomail.com";

// Posts to formsubmit.co's AJAX endpoint instead of letting the browser do a
// native form POST, which would navigate the visitor away from the site to
// formsubmit's own generic confirmation page with no way back.
export async function submitForm(data: Record<string, string>, subject: string): Promise<void> {
  const res = await fetch(FORMSUBMIT_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ ...data, _subject: subject, _template: "table" }),
  });

  if (!res.ok) {
    throw new Error("Submission failed");
  }
}
