import { Navigate, Route, Routes } from 'react-router-dom';
import RulesContent from './RulesContent';
import RulesLayout from './RulesLayout';

function Rules() {
  return (
    <Routes>
      <Route path="/*" element={<RulesLayout />}>
        <Route index element={<Navigate to="/rules/rules" replace />} />
        <Route path=":id" element={<RulesContent />} />
        <Route path=":categoryId/:pageId" element={<RulesContent />} />
      </Route>
    </Routes>
  );
}

export default Rules;
