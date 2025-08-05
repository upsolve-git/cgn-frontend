import React from 'react';
import { useState } from 'react';

import AdminSalonCard from '../../organisms/Admin/AdminSalonCard';
import AddSalonForm from '../../organisms/Admin/AddSalonForm';
import EditSalonModal from './EditSalonModal';

import { useSalons } from '../../../utils/hooks/useSalons';

import { Salon } from '../../../interfaces/Salon';

interface AdminSalonSectionProps {}

const AdminSalonSection: React.FC<AdminSalonSectionProps> = () => {
    let {
        salons,
        handleEditSalon,
        handleDeleteSalon,
    } = useSalons()

    const [editingSalon, setEditingSalon] = useState<Salon | null>(null);

  return (
    <div>
        <div>
            <p
            className='text-xs text-primary font-bold mb-4 tablet:text-sm desktop:text-md'>
                Existing salons:
            </p>
            <div
            className='grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-3'>
                {
                    salons.map((salon) => (
                        <AdminSalonCard key={salon.id} salon={salon} 
                        onEdit={()=>setEditingSalon(salon)}
                        onDelete={()=>handleDeleteSalon(salon.id)}/>
                    ))
                }
            </div>
        <div>
            <AddSalonForm />
        </div>
        {editingSalon && (
        <EditSalonModal
          salon={editingSalon}
          onClose={() => setEditingSalon(null)}
          onSave={async (updates) => {
            await handleEditSalon(editingSalon.id, updates);
            setEditingSalon(null);
          }}
        />
      )}
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
