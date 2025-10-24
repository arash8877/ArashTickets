import BackButton from '@/components/BackButton';
import Breadcrumb from '@/components/Breadcrumb';
import CustomTitle from '@/components/CustomTitle';
import CreateTicketForm from '@/components/CreateTicketForm';

const TicketCreatePage = () => {
  return (
    <div className="page-container flex flex-col gap-6">
      {/* Navigation */}
      <div className="flex flex-wrap justify-start items-center gap-4">
        <BackButton destination="/tickets" />
        <Breadcrumb
          items={[
            { label: 'Tickets', route: '/tickets' },
            { label: 'Create', route: '/tickets/create' },
          ]}
        />
      </div>

      {/* Title */}
      <CustomTitle title="Create New Ticket" />

      {/* Form */}
      <div className="bg-white p-6 sm:p-8">
        <CreateTicketForm />
      </div>
    </div>
  );
};

export default TicketCreatePage;
