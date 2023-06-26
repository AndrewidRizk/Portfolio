import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  // Define your items array with placeholder data
  const items = [
    { id: 1, subtitle: 'Subtitle 1', title: 'Title 1' },
    { id: 2, subtitle: 'Subtitle 2', title: 'Title 2' },
    // Add more items as needed
  ];

  // Find the selected item based on the selectedId
  const selectedItem = items.find(item => item.id === selectedId);

  return (
    <div>
      {items.map(item => (
        <motion.div
          layoutId={item.id}
          onClick={() => setSelectedId(item.id)}
          key={item.id}
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div layoutId={selectedId}>
            <motion.h5>Selected: {selectedItem.subtitle}</motion.h5>
            <motion.h2>{selectedItem.title}</motion.h2>
            <motion.button onClick={() => setSelectedId(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
