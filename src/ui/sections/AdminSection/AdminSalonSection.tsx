import React from 'react';

interface AdminSalonSectionProps {}

const AdminSalonSection: React.FC<AdminSalonSectionProps> = () => {
  return (
    <div>
        <div>
        <p
        className='text-xs text-primary font-bold mb-4'>
            Existing memberships:
        </p>
        {/* <div
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
        </div> */}
        {/* <AddMembershipForm /> */}
        {/* {editing && (
          <EditMembershipModal
            membership={editing}
            onClose={() => setEditing(null)}
            onSave={(updated) => {
              handleMembershipEdit(editing.id, updated);
              setEditing(null);
            }}
          />
      )} */}
    </div>
    </div>
  );
};

export default AdminSalonSection;
