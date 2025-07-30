import React from 'react';
import { useState } from 'react';

import MembershipAdminCard from '../../organisms/Admin/MembershipAdminCard';
import AddMembershipForm from '../../organisms/Admin/AddMembershipForm';
import EditMembershipModal from './EditEditMembershipModal';

import { useAdminMembership } from '../../../utils/hooks/useAdminMembership';

import { Membership } from '../../../interfaces/Membership';

interface AdminMembershipSectionProps {}

const AdminMembershipSection: React.FC<AdminMembershipSectionProps> = () => {

  let {
    memberships,
    deleteMembership,
    handleMembershipEdit
  } = useAdminMembership()
  console.log("Memberships in section:", memberships);

  const [editing, setEditing] = useState<Membership | null>(null);

  return (
    <div>
        <p
        className='text-xs text-primary font-bold mb-4'>
            Existing memberships:
        </p>
        <div
        className='grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-3'>
          {
            memberships.map((membership, index) => (
              <MembershipAdminCard key={membership.id} 
              membership={membership}
              onEdit={() => setEditing(membership)}
              onDelete={()=>deleteMembership(membership.id || index)}
              />
            ))
          }
        </div>
        <AddMembershipForm />
        {editing && (
          <EditMembershipModal
            membership={editing}
            onClose={() => setEditing(null)}
            onSave={(updated) => {
              handleMembershipEdit(editing.id, updated);
              setEditing(null);
            }}
          />
      )}
    </div>
  );
};

export default AdminMembershipSection;
