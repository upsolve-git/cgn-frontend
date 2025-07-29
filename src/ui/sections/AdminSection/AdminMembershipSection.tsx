import React from 'react';
import MembershipAdminCard from '../../organisms/Admin/MembershipAdminCard';
import { useAdminMembership } from '../../../utils/hooks/useAdminMembership';
import AddMembershipForm from '../../organisms/Admin/AddMembershipForm';

interface AdminMembershipSectionProps {}

const AdminMembershipSection: React.FC<AdminMembershipSectionProps> = () => {

  let {
    memberships,
    deleteMembership
  } = useAdminMembership()
  console.log("Memberships in section:", memberships);
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
              onDelete={()=>deleteMembership(membership.id || index)}
              />
            ))
          }
        </div>
        <AddMembershipForm />
    </div>
  );
};

export default AdminMembershipSection;
