export const mainMenu = {
  title: '🤖 HAMATRIX MAIN MENU',
  options: [
    { id: 1, label: 'AI Chat', action: 'ai_chat' },
    { id: 2, label: 'Image Generation', action: 'img_gen' },
    { id: 3, label: 'Support', action: 'support' },
    { id: 4, label: 'About', action: 'about' }
  ]
};

export const supportMenu = {
  title: '📞 SUPPORT MENU',
  options: [
    { id: 1, label: 'Contact Admin', action: 'contact_admin' },
    { id: 2, label: 'FAQ', action: 'faq' },
    { id: 3, label: 'Back to Main', action: 'back' }
  ]
};

// Function to render a menu as text
export function renderMenu(menu) {
  let text = `*${menu.title}*\n\n`;
  menu.options.forEach(opt => {
    text += `${opt.id}. ${opt.label}\n`;
  });
  text += `\nReply with a number to select.`;
  return text;
}
