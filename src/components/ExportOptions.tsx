import React, { useState } from 'react';
    import { Button, Select } from '@shadcn/ui';
    import { exportPresentation } from '@/utils/api'; // Import your API utility
    import { useAtom } from 'jotai';
    import { presentationAtom } from '@/store/presentation'; // Import your presentation atom


    const exportFormats = [
      { value: 'pptx', label: 'PowerPoint (.pptx)' },
      { value: 'pdf', label: 'PDF (.pdf)' },
      { value: 'html', label: 'HTML (.html)' }, // Added HTML export option
    ];


    const ExportOptions: React.FC = () => {
      const [selectedFormat, setSelectedFormat] = useState('pptx');
      const [exporting, setExporting] = useState(false);
      const [exportResult, setExportResult] = useState('');
      const [presentation] = useAtom(presentationAtom);


      const handleExport = async () => {
        setExporting(true);
        setExportResult(''); // Clear previous result
        try {
          const result = await exportPresentation(presentation); // Replace with your actual API call
          setExportResult(`Export successful: ${result}`);
        } catch (error: any) {
          setExportResult(`Export failed: ${error.message || 'An error occurred.'}`);
          console.error('Export failed:', error);
        } finally {
          setExporting(false);
        }
      };


      return (
        <div>
          <h2>Export Options</h2>
          <Select
            options={exportFormats}
            value={selectedFormat}
            onChange={(e) => setSelectedFormat(e.target.value)}
            label="Select Export Format"
          />
          <Button onClick={handleExport} disabled={exporting}>
            {exporting ? 'Exporting...' : 'Export'}
          </Button>
          {exportResult && <p className={exportResult.startsWith('Export successful') ? 'text-green-500' : 'text-red-500'}>{exportResult}</p>}
        </div>
      );
    };


    export default ExportOptions;
