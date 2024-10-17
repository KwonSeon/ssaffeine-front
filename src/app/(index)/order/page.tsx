'use client';
import { CustomCheckbox } from '@/components/atoms/CustomCheckbox';
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CheckboxGroup,
  Input,
  SearchIcon,
  Tab,
  Tabs,
} from '@nextui-org/react';
import { useState } from 'react';

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [groupSelected, setGroupSelected] = useState<string[]>([]);
  const variants = ['underlined'];
  return (
    <div className='flex'>
      <div className='flex flex-col gap-1 w-fit'>
        <CheckboxGroup
          label='나의 주문'
          value={groupSelected}
          onChange={setGroupSelected}
          classNames={{
            base: 'w-full',
            label: 'text-center',
          }}
        >
          <CustomCheckbox
            value='1'
            user={{
              name: '월요일',
              username: 'jrgarciadev',
              url: 'https://twitter.com/jrgarciadev',
              role: 'Software Developer',
              status: 'Active',
            }}
            statusColor='secondary'
          />
          <CustomCheckbox
            value='2'
            user={{
              name: '화요일',
              username: 'johndoe',
              url: '#',
              role: 'Product Designer',
              status: 'Vacation',
            }}
            statusColor='warning'
          />
          <CustomCheckbox
            value='3'
            user={{
              name: '수요일',
              username: 'zoeylang',
              url: '#',
              role: 'Technical Writer',
              status: 'Out of office',
            }}
            statusColor='danger'
          />
          <CustomCheckbox
            value='4'
            user={{
              name: '목요일',
              username: 'william',
              url: '#',
              role: 'Sales Manager',
              status: 'Active',
            }}
            statusColor='secondary'
          />
          <CustomCheckbox
            value='5'
            user={{
              name: '금요일',
              username: 'johndoe',
              url: '#',
              role: 'Product Designer',
              status: 'Vacation',
            }}
            statusColor='warning'
          />
        </CheckboxGroup>
        <p className='mt-4 ml-1 text-default-500'>
          Selected: {groupSelected.join(', ')}
        </p>
        <div className='flex gap-4 items-center'>
          <Button radius='sm'>주문확정</Button>
        </div>
      </div>
      <div>
        세부 옵션 설정
        <Input clearable contentRight={<SearchIcon />} placeholder='검색' />
        <div className='flex flex-wrap gap-4'>
          {variants.map((variant) => (
            <Tabs key={variant} variant={variant} aria-label='Tabs variants'>
              <Tab key='Monday' title='월'>
                <div className='flex w-full flex-col'>
                  <Tabs aria-label='Options'>
                    <Tab key='coffee' title='커피'>
                      <Card>
                        <CardBody>
                          <Accordion selectionMode='multiple'>
                            <AccordionItem
                              key='1'
                              aria-label='Accordion 1'
                              title='아메리카노'
                            >
                              옵션 선택
                            </AccordionItem>
                            <AccordionItem
                              key='2'
                              aria-label='Accordion 2'
                              title='더치 커피'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='3'
                              aria-label='Accordion 3'
                              title='카페 라떼'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='4'
                              aria-label='Accordion 4'
                              title='모카 라떼'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='5'
                              aria-label='Accordion 5'
                              title='메뉴'
                            >
                              아무말
                            </AccordionItem>
                          </Accordion>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key='decaffein' title='디카페인'>
                      <Card>
                        <CardBody>
                          <Accordion selectionMode='multiple'>
                            <AccordionItem
                              key='1'
                              aria-label='Accordion 1'
                              title='메뉴1'
                            >
                              옵션 선택
                            </AccordionItem>
                            <AccordionItem
                              key='2'
                              aria-label='Accordion 2'
                              title='메뉴2'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='3'
                              aria-label='Accordion 3'
                              title='메뉴3'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='4'
                              aria-label='Accordion 4'
                              title='메뉴4'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='5'
                              aria-label='Accordion 5'
                              title='메뉴5'
                            >
                              아무말
                            </AccordionItem>
                          </Accordion>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key='ade' title='에이드'>
                      <Card>
                        <CardBody>
                          <Accordion selectionMode='multiple'>
                            <AccordionItem
                              key='1'
                              aria-label='Accordion 1'
                              title='메뉴1'
                            >
                              옵션 선택
                            </AccordionItem>
                            <AccordionItem
                              key='2'
                              aria-label='Accordion 2'
                              title='메뉴2'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='3'
                              aria-label='Accordion 3'
                              title='메뉴3'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='4'
                              aria-label='Accordion 4'
                              title='메뉴4'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='5'
                              aria-label='Accordion 5'
                              title='메뉴5'
                            >
                              아무말
                            </AccordionItem>
                          </Accordion>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </div>
              </Tab>
              <Tab key='Tuesday' title='화'>
                <div className='flex w-full flex-col'>
                  <Tabs aria-label='Options'>
                    <Tab key='coffee' title='커피'>
                      <Card>
                        <CardBody>
                          <Accordion selectionMode='multiple'>
                            <AccordionItem
                              key='1'
                              aria-label='Accordion 1'
                              title='아메리카노'
                            >
                              옵션 선택
                            </AccordionItem>
                            <AccordionItem
                              key='2'
                              aria-label='Accordion 2'
                              title='더치 커피'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='3'
                              aria-label='Accordion 3'
                              title='카페 라떼'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='4'
                              aria-label='Accordion 4'
                              title='모카 라떼'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='5'
                              aria-label='Accordion 5'
                              title='메뉴'
                            >
                              아무말
                            </AccordionItem>
                          </Accordion>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key='decaffein' title='디카페인'>
                      <Card>
                        <CardBody>
                          <Accordion selectionMode='multiple'>
                            <AccordionItem
                              key='1'
                              aria-label='Accordion 1'
                              title='메뉴1'
                            >
                              옵션 선택
                            </AccordionItem>
                            <AccordionItem
                              key='2'
                              aria-label='Accordion 2'
                              title='메뉴2'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='3'
                              aria-label='Accordion 3'
                              title='메뉴3'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='4'
                              aria-label='Accordion 4'
                              title='메뉴4'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='5'
                              aria-label='Accordion 5'
                              title='메뉴5'
                            >
                              아무말
                            </AccordionItem>
                          </Accordion>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key='ade' title='에이드'>
                      <Card>
                        <CardBody>
                          <Accordion selectionMode='multiple'>
                            <AccordionItem
                              key='1'
                              aria-label='Accordion 1'
                              title='메뉴1'
                            >
                              옵션 선택
                            </AccordionItem>
                            <AccordionItem
                              key='2'
                              aria-label='Accordion 2'
                              title='메뉴2'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='3'
                              aria-label='Accordion 3'
                              title='메뉴3'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='4'
                              aria-label='Accordion 4'
                              title='메뉴4'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='5'
                              aria-label='Accordion 5'
                              title='메뉴5'
                            >
                              아무말
                            </AccordionItem>
                          </Accordion>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </div>
              </Tab>
              <Tab key='Wednesday' title='수'>
                <div className='flex w-full flex-col'>
                  <Tabs aria-label='Options'>
                    <Tab key='coffee' title='커피'>
                      <Card>
                        <CardBody>
                          <Accordion selectionMode='multiple'>
                            <AccordionItem
                              key='1'
                              aria-label='Accordion 1'
                              title='아메리카노'
                            >
                              옵션 선택
                            </AccordionItem>
                            <AccordionItem
                              key='2'
                              aria-label='Accordion 2'
                              title='더치 커피'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='3'
                              aria-label='Accordion 3'
                              title='카페 라떼'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='4'
                              aria-label='Accordion 4'
                              title='모카 라떼'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='5'
                              aria-label='Accordion 5'
                              title='메뉴'
                            >
                              아무말
                            </AccordionItem>
                          </Accordion>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key='decaffein' title='디카페인'>
                      <Card>
                        <CardBody>
                          <Accordion selectionMode='multiple'>
                            <AccordionItem
                              key='1'
                              aria-label='Accordion 1'
                              title='메뉴1'
                            >
                              옵션 선택
                            </AccordionItem>
                            <AccordionItem
                              key='2'
                              aria-label='Accordion 2'
                              title='메뉴2'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='3'
                              aria-label='Accordion 3'
                              title='메뉴3'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='4'
                              aria-label='Accordion 4'
                              title='메뉴4'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='5'
                              aria-label='Accordion 5'
                              title='메뉴5'
                            >
                              아무말
                            </AccordionItem>
                          </Accordion>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key='ade' title='에이드'>
                      <Card>
                        <CardBody>
                          <Accordion selectionMode='multiple'>
                            <AccordionItem
                              key='1'
                              aria-label='Accordion 1'
                              title='메뉴1'
                            >
                              옵션 선택
                            </AccordionItem>
                            <AccordionItem
                              key='2'
                              aria-label='Accordion 2'
                              title='메뉴2'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='3'
                              aria-label='Accordion 3'
                              title='메뉴3'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='4'
                              aria-label='Accordion 4'
                              title='메뉴4'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='5'
                              aria-label='Accordion 5'
                              title='메뉴5'
                            >
                              아무말
                            </AccordionItem>
                          </Accordion>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </div>
              </Tab>
              <Tab key='Thursday' title='목'>
                <div className='flex w-full flex-col'>
                  <Tabs aria-label='Options'>
                    <Tab key='coffee' title='커피'>
                      <Card>
                        <CardBody>
                          <Accordion selectionMode='multiple'>
                            <AccordionItem
                              key='1'
                              aria-label='Accordion 1'
                              title='아메리카노'
                            >
                              옵션 선택
                            </AccordionItem>
                            <AccordionItem
                              key='2'
                              aria-label='Accordion 2'
                              title='더치 커피'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='3'
                              aria-label='Accordion 3'
                              title='카페 라떼'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='4'
                              aria-label='Accordion 4'
                              title='모카 라떼'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='5'
                              aria-label='Accordion 5'
                              title='메뉴'
                            >
                              아무말
                            </AccordionItem>
                          </Accordion>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key='decaffein' title='디카페인'>
                      <Card>
                        <CardBody>
                          <Accordion selectionMode='multiple'>
                            <AccordionItem
                              key='1'
                              aria-label='Accordion 1'
                              title='메뉴1'
                            >
                              옵션 선택
                            </AccordionItem>
                            <AccordionItem
                              key='2'
                              aria-label='Accordion 2'
                              title='메뉴2'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='3'
                              aria-label='Accordion 3'
                              title='메뉴3'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='4'
                              aria-label='Accordion 4'
                              title='메뉴4'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='5'
                              aria-label='Accordion 5'
                              title='메뉴5'
                            >
                              아무말
                            </AccordionItem>
                          </Accordion>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key='ade' title='에이드'>
                      <Card>
                        <CardBody>
                          <Accordion selectionMode='multiple'>
                            <AccordionItem
                              key='1'
                              aria-label='Accordion 1'
                              title='메뉴1'
                            >
                              옵션 선택
                            </AccordionItem>
                            <AccordionItem
                              key='2'
                              aria-label='Accordion 2'
                              title='메뉴2'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='3'
                              aria-label='Accordion 3'
                              title='메뉴3'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='4'
                              aria-label='Accordion 4'
                              title='메뉴4'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='5'
                              aria-label='Accordion 5'
                              title='메뉴5'
                            >
                              아무말
                            </AccordionItem>
                          </Accordion>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </div>
              </Tab>
              <Tab key='Friday' title='금'>
                <div className='flex w-full flex-col'>
                  <Tabs aria-label='Options'>
                    <Tab key='coffee' title='커피'>
                      <Card>
                        <CardBody>
                          <Accordion selectionMode='multiple'>
                            <AccordionItem
                              key='1'
                              aria-label='Accordion 1'
                              title='아메리카노'
                            >
                              옵션 선택
                            </AccordionItem>
                            <AccordionItem
                              key='2'
                              aria-label='Accordion 2'
                              title='더치 커피'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='3'
                              aria-label='Accordion 3'
                              title='카페 라떼'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='4'
                              aria-label='Accordion 4'
                              title='모카 라떼'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='5'
                              aria-label='Accordion 5'
                              title='메뉴'
                            >
                              아무말
                            </AccordionItem>
                          </Accordion>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key='decaffein' title='디카페인'>
                      <Card>
                        <CardBody>
                          <Accordion selectionMode='multiple'>
                            <AccordionItem
                              key='1'
                              aria-label='Accordion 1'
                              title='메뉴1'
                            >
                              옵션 선택
                            </AccordionItem>
                            <AccordionItem
                              key='2'
                              aria-label='Accordion 2'
                              title='메뉴2'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='3'
                              aria-label='Accordion 3'
                              title='메뉴3'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='4'
                              aria-label='Accordion 4'
                              title='메뉴4'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='5'
                              aria-label='Accordion 5'
                              title='메뉴5'
                            >
                              아무말
                            </AccordionItem>
                          </Accordion>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key='ade' title='에이드'>
                      <Card>
                        <CardBody>
                          <Accordion selectionMode='multiple'>
                            <AccordionItem
                              key='1'
                              aria-label='Accordion 1'
                              title='메뉴1'
                            >
                              옵션 선택
                            </AccordionItem>
                            <AccordionItem
                              key='2'
                              aria-label='Accordion 2'
                              title='메뉴2'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='3'
                              aria-label='Accordion 3'
                              title='메뉴3'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='4'
                              aria-label='Accordion 4'
                              title='메뉴4'
                            >
                              아무말
                            </AccordionItem>
                            <AccordionItem
                              key='5'
                              aria-label='Accordion 5'
                              title='메뉴5'
                            >
                              아무말
                            </AccordionItem>
                          </Accordion>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </div>
              </Tab>
            </Tabs>
          ))}
        </div>
        <div className='flex gap-4 items-center'>
          <Button radius='sm'>저장하기</Button>
        </div>
      </div>
    </div>
  );
}
