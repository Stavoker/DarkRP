import { Navigate, Route, Routes } from 'react-router-dom';
import HowSitsWork from './HowSitsWork';
import RulesContent from './RulesContent';
import RulesLayout from './RulesLayout';

function Rules() {
  return (
    <Routes>
      <Route path="/*" element={<RulesLayout />}>
        <Route index element={<Navigate to="/rules/rules" replace />} />
        <Route path="administration-staff/how-sits-work" element={<HowSitsWork />} />
        <Route path="administration-staff/want-to-join-staff" element={<RulesContent />} />
        <Route path="administration-staff/staff-roles" element={<RulesContent />} />
        <Route path=":id" element={<RulesContent />} />
        <Route path=":categoryId/:pageId" element={<RulesContent />} />
      </Route>
    </Routes>
  );
}

export default Rules;
