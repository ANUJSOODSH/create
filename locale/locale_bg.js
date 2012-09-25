if (window.midgardCreate === undefined) {
  window.midgardCreate = {};
}
if (window.midgardCreate.locale === undefined) {
  window.midgardCreate.locale = {};
}

window.midgardCreate.locale.bg = {
  // Session-state buttons for the main toolbar
  'Save': '������',
  'Saving': '���������',
  'Cancel': '������',
  'Edit': '����������',
  // Storage status messages
  'localModification': 'Item "<%= label %>" ��� ������� �����������',
  'localModifications': '<%= number %> �������� �� ���� �������� ���� ������� �����������',
  'Restore': '����������',
  'Ignore': '���������',
  'saveSuccess': '��������� "<%= label %>" ���� ������� �������',
  'saveSuccessMultiple': '<%= number %> �������� ���� ������� ��������',
  'saveError': '������� ������ ��� ���������<br /><%= error %>',
  // Tagging
  'Item tags': '������� �� ��������',
  'Suggested tags': '����������� �������',
  'Tags': '�������',
  'add a tag': '������ ������',
  // Collection widgets
  'Add': '������',
  'Choose type to add': '������ ��� �� ��������'
};
